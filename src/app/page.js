import Image from "next/Image"
export default async function Home() {
  const respostas = await fetch("https://back-end-ifms-rho.vercel.app/campi",{
    next:{
      revalidate: 1
    }
  })
  const campi = await respostas.json();
  return (
    <main>
      <h1>Home!!</h1>
      {campi.map((campus) => (
        <div>
          <p>{campus.nome_campus}</p>
          <Image width={100} height={100} src={campus.image_url}/>
        </div>
      ))}
    </main>
  );
}