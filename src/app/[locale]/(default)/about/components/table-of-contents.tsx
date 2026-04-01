import { generateSlug } from '@/lib/utils';

const TableOfContents = ({ headings }: { headings: string[] }) => {
  return (
    <div className="hidden md:block md:min-w-[250px]">
      <nav className="sticky top-32">
        <h3 className="mb-6 text-lg font-semibold text-accent-500">Contents</h3>
        <ul className="space-y-3">
          {headings.map((heading, index) => (
            <li key={`${heading}-${index}`}>
              <a
                href={`#${generateSlug(heading)}`}
                className="group flex items-center text-sm text-white/70 transition-all duration-300 hover:text-accent-500"
              >
                <span className="mr-2 h-1 w-1 rounded-full bg-accent-500 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                {heading}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
