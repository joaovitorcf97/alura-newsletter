function Article({ title, text, tags, image, alt }: any) {
  return (
    <div className="p-5 bg-gray-200 dark:bg-dark-200 sm:rounded-xl">
      <h3 className="text-xl text-alura-200 dark:text-gray-200 font-bold mb-2">{title}</h3>
      <div className="w-full flex justify-start gap-2 pr-5  mb-4">
        {
          tags.map((tag: any, index: any) =>
            <span
              className="bg-alura-100 dark:bg-dark-100 px-3 py-1 rounded-full text-gray-200 text-xs uppercase font-bold"
              key={index}>{tag}</span>
          )
        }
      </div>
      <div className="grid gap-1">
        {
          text.map((context: any, index: any) => <p className="text-alura-200 dark:text-gray-300" key={index}>{context}</p>)
        }
      </div>
      {image && <img className="mt-3 rounded-xl" src={image} />}
      {image && alt && <span className="sr-only">{alt}</span>}
    </div>
  );
}

export default Article;