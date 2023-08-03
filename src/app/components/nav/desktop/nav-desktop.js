export default function NavDesktop({data}) {
  return (<>
    {data.map((item) => (
        <a key={item.name} href={item.href}
           className="text-sm font-semibold leading-6 text-white">
          {item.name}
        </a>
    ))}
  </>);
}