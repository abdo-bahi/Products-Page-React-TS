import { useEffect, useState } from "react";
interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

const TopSellers = () => {
  const [authors, setAuthors] = useState<Author[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://randomuser.me//api?results=10");
        const data = await res.json();
        console.log('datausers', data);
        const authorsData: Author[] = data.results.map((user: any) => {
          name: `${user.name.first} ${user.name.first}`;
          isFollowing: false;
          image: user.picture.medium;
        });
        setAuthors(authorsData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="bg-white p-5 mx-5 mt-[5rem] border w-[23rem] rounded">
      <h2 className="text-xl fong-bold mb-5">Top Sellers</h2>
      <ul>
        {(!authors) ? 'Failed to fetch sellers' : authors.map((author, index) => (
           <li key={index} className="flex items-center justify-between mb-4">
            <section className="flex justify-center items-center">
              {/* <img
                src={author.image}
                alt={author.name}
                className="w-[25%] h-[25%] justify-center rounded-full"
              /> */}
              <span className="ml-4">{author.name}</span>
            </section>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;
