import React from "react";

const lists = [
  {
    label: "Home",
    headings: [
      "Browne Arnold",
      "Chronograph Blue",
      "Smart Phones",
      "Automatic Watch",
      "Hair Straighteners",
    ],
  },
  {
    label: "Services",
    headings: [
      "About us",
      "Contact us",
      "Return Policy",
      "Privacy Policy",
      "Payment Policy",
    ],
  },
  {
    label: "Help",
    headings: ["News", "Service", "Our Policy", "Custmer Care", "FAQS"],
  },
  {
    label: "Team Member:",
    headings: ["Muhib Sami", "Saqib Saleem", "Talha Shehzad"],
  },
];

const Footer = () => {
  const footerLine = "34th street PetersBourgh Boulevard New York ,<br/> USA Film Makers";

  return (
    <div className="bg-[#14143c] text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-7">
        <div className="flex flex-col justify-center items-start md:items-center px-7 md:px-2 gap-2">
          <img src="./logo.png" className="h-30 w-62" alt="logo" />
          <p
            className="text-center"
            dangerouslySetInnerHTML={{ __html: footerLine }}
          />
        </div>
        <div className="col-span-1 md:col-span-3  text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-6 md:px-0">
          {lists.map((list, index) => (
            <div key={index}>
              <h3 className="font-sans text-lg font-semibold text-white mb-2">
                {list.label}
              </h3>
              <ul>
                {list.headings.map((subList, subListIndex) => (
                  <li
                    key={subListIndex}
                    className="text-white text-sm font-Dark mb-2"
                  >
                    {subList}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
