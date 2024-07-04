import { Navbar } from "@/components";


export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1>Hello Root Layout about</h1>
        {children}
      </div>
    </>

  );
}