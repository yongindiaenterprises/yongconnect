'use client';

import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

type FormDataType = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export const SupportForm = () => {
  const t = useTranslations('support');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | undefined>();
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (event_: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event_.target.name]: event_.target.value });
  };

  const handleSubmit = async (event_: React.FormEvent<HTMLFormElement>) => {
    event_.preventDefault();
    setIsSubmitting(true);
    setError(undefined);

    const formData = new FormData(event_.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setIsSuccess(true);
      event_.currentTarget.reset();
    } catch {
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-2xl rounded-lg bg-background/50 p-6 shadow-lg">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-white">{t('form.title')}</h2>
      </div>

      {isSuccess ? (
        <div className="text-center">
          <h3 className="mb-2 text-xl font-semibold text-accent-500">
            {t('form.success.title')}
          </h3>
          <p className="mb-4 text-white/80">{t('form.success.message')}</p>
          <Button
            onClick={() => setIsSuccess(false)}
            className="w-full bg-accent-500 text-black hover:bg-accent-500/90"
          >
            {t('form.success.close')}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">{t('form.fields.name.label')}</Label>
            <Input
              id="name"
              name="name"
              placeholder={t('form.fields.name.placeholder')}
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">{t('form.fields.email.label')}</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder={t('form.fields.email.placeholder')}
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">{t('form.fields.phone.label')}</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder={t('form.fields.phone.placeholder')}
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="subject">{t('form.fields.subject.label')}</Label>
            <Select name="subject" required value={formData.subject}>
              <SelectTrigger>
                <SelectValue
                  placeholder={t('form.fields.subject.placeholder')}
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="technical">
                  {t('form.fields.subject.options.technical')}
                </SelectItem>
                <SelectItem value="billing">
                  {t('form.fields.subject.options.billing')}
                </SelectItem>
                <SelectItem value="general">
                  {t('form.fields.subject.options.general')}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">{t('form.fields.message.label')}</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={(event_: React.ChangeEvent<HTMLTextAreaElement>) =>
                setFormData({
                  ...formData,
                  message: event_.target.value,
                })
              }
              className="min-h-[100px]"
              placeholder={t('form.fields.message.placeholder')}
              required
            />
          </div>

          {error && <p className="text-sm text-red-500">{error}</p>}

          <Button
            type="submit"
            className="w-full bg-accent-500 text-black hover:bg-accent-500/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? t('form.submitting') : t('form.submit')}
          </Button>
        </form>
      )}
    </div>
  );
};
