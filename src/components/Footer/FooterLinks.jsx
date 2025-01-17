const FooterLinks = () => {
  const links = [
    'Home', 'About', 'Services', 'Portfolio', 'Contact', 
    'Careers', 'Testimonials', 'Site Map'
  ];

  return (
    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
      {links.map((link, index) => (
        <a
          key={index}
          href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
          className="hover:text-white transition-colors"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;