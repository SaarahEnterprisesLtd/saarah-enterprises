type Props = {
    title: string;
    description: string;
  };
  
  export default function ServiceCard({ title, description }: Props) {
    return (
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>
      </div>
    );
  }
  