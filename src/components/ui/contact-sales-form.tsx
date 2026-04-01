'use client';

import { X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

interface ContactSalesFormProps {
  isOpen: boolean;
  onClose: () => void;
  planTitle?: string;
}

type FormDataType = {
  name: string;
  email: string;
  phoneCode: string;
  phoneNumber: string;
  planTitle?: string;
};

export function ContactSalesForm({
  isOpen,
  onClose,
  planTitle,
}: ContactSalesFormProps) {
  const t = useTranslations('contactSalesForm');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phoneCode: '+91',
    phoneNumber: '',
    planTitle: undefined,
  });

  const handleChange = (event_: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event_.target.name]: event_.target.value });
  };

  const handleSubmit = async (event_: React.FormEvent<HTMLFormElement>) => {
    event_.preventDefault();
    setIsSubmitting(true);
    setError(undefined);

    try {
      const response = await fetch('/api/contact-sales', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          planTitle,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send contact request');
      }

      setIsSuccess(true);

      // Reset form
      setFormData({
        name: '',
        email: '',
        phoneCode: '+91',
        phoneNumber: '',
        planTitle: undefined,
      });
    } catch {
      setError('Failed to send contact request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="bg-white sm:max-w-[425px]">
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>

        {isSuccess ? (
          <div className="flex flex-col items-center justify-center py-8 text-center">
            <div className="mb-4 rounded-full bg-green-100 p-3">
              <svg
                className="h-8 w-8 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900">
              {t('success.title')}
            </h3>
            <p className="mb-6 text-gray-600">{t('success.message')}</p>
            <Button
              onClick={handleClose}
              className="bg-blue-600 text-white hover:bg-blue-700"
            >
              {t('success.close')}
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-gray-900">
                {t('title')}
              </DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700">
                  {t('name')}
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-blue-500"
                  placeholder={t('namePlaceholder')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700">
                  {t('email')}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="border-gray-300 focus:border-blue-500"
                  placeholder={t('emailPlaceholder')}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-gray-700">
                  {t('phone')}
                </Label>
                <div className="flex gap-2">
                  <Select
                    value={formData.phoneCode}
                    onValueChange={value =>
                      setFormData({ ...formData, phoneCode: value })
                    }
                  >
                    <SelectTrigger className="w-[100px] border-gray-300">
                      <SelectValue placeholder="+91" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="+91">+91</SelectItem>
                      <SelectItem value="+1">+1</SelectItem>
                      <SelectItem value="+44">+44</SelectItem>
                      <SelectItem value="+81">+81</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone"
                    name="phoneNumber"
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="flex-1 border-gray-300 focus:border-blue-500"
                    placeholder={t('phonePlaceholder')}
                  />
                </div>
              </div>

              {error && <div className="text-sm text-red-500">{error}</div>}

              <Button
                type="submit"
                className="w-full bg-blue-600 text-white hover:bg-blue-700"
                disabled={isSubmitting}
              >
                {isSubmitting ? t('submitting') : t('submit')}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
