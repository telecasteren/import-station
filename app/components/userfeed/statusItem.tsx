type StatusProps = {
  href: string;
  color: string;
  label: string;
  count: number;
};

export default function StatusItem({ href, color, label, count }: StatusProps) {
  return (
    <li>
      <a
        href={href}
        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
      >
        <span
          className={`flex w-3 h-3 me-3 rounded-full`}
          style={{ backgroundColor: color }}
        ></span>
        {label}
        <div className="ms-auto flex items-center justify-center w-6 h-6 text-xs font-medium bg-gray-200 rounded-full dark:bg-gray-600 dark:text-white">
          {count}
        </div>
      </a>
    </li>
  );
}
