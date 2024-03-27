import Image from "next/Image"
export default async function Home() {
  try{
  const respostas = await fetch("https://back-end-ifms-rho.vercel.app/camp",{
    next:{
      revalidate: 1
    }
  });

  if (!respostas.ok) {
    throw new Error("Erro na requisição.");
  }

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
catch (error) {
  return (
    <div>
      <h1>Erro: API indisponível.</h1>
    </div>
  )
}
}