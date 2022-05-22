/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import { Menu } from "../../components/Menu";

import { BiUser } from "react-icons/bi"

import styles from "./post.module.scss"

export default function CooperativePost() {
    return (
        <>
            <Head>
                <title>Coperativa Postagens</title>
            </Head>

            <Menu />
            <div className={styles.main}>
                <main className="w-[90%] mx-[5%] bg-zinc-800 p-16 mt-[23px] rounded-md border-[3px] border-green-400 flex items-center flex-col">
                    <img className="mt-[34px]" src="/images/logo-coperativa.svg" alt="imagem do logo da coperativa" />
                    <h1 className="mt-[20px] text-4xl">Recicla tudo</h1>
                    <h2 className="mt-[20px] text-2xl">Resíduos coletados</h2>
                    <div>
                        <ul className="flex items-center gap-10 mt-[14px]">
                            <li className="flex flex-col items-center">
                                <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                    <img className="w-[44.5px] h-[42.35px]" src="/images/papel.svg" alt="imagem representativa papel" />
                                </button>
                                <span className="mt-[10px]">Papel</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                    <img className="w-[44.5px] h-[42.35px]" src="/images/plastico.svg" alt="imagem representativa plastico" />
                                </button>
                                <span className="mt-[10px]">Plastico</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                    <img className="w-[44.5px] h-[42.35px]" src="/images/metal.svg" alt="imagem representativa metal" />
                                </button>
                                <span className="mt-[10px]">Metal</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                    <img className="w-[44.5px] h-[42.35px]" src="/images/vidro.svg" alt="imagem representativa vidro" />
                                </button>
                                <span className="mt-[10px]">Vidro</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                    <img className="w-[44.5px] h-[42.35px]" src="/images/bateria.svg" alt="imagem representativa bateria" />
                                </button>
                                <span className="mt-[10px]">Bateria</span>
                            </li>
                            <li className="flex flex-col items-center">
                                <button className="w-[76px] h-[76px] flex items-center justify-center bg-white rounded-full">
                                    <img className="w-[44.5px] h-[42.35px]" src="/images/papelao.svg" alt="imagem representativa papelao" />
                                </button>
                                <span className="mt-[10px]">Papelao</span>
                            </li>
                        </ul>
                    </div>
                    <div className="w-[45%]">
                        <h2 className="mt-[35px]">Endereço</h2>
                        <p>São Paulo - São Paulo, Avenida Principal, Morumbi - N°738</p>
                    </div>

                    <div className="flex flex-col justify-center p-10 mt-10 border-t-2 border-green-400 ">
                        <div className="flex flex-col justify-center items-center mb-14">
                            <h1 className="text-6xl font-bold my-6">Titulo postagem</h1>
                            <time className="font-medium">22 de maio de 2022 </time>
                        </div>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti suscipit, quia numquam temporibus ipsum tenetur quis ipsam reiciendis minus fugiat qui quod minima porro velit. Natus adipisci rem velit soluta.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo similique animi est repellat! Nulla, ipsam? At sunt ducimus id repellat eligendi. Error magni, autem ipsa facilis asperiores beatae sapiente repudiandae!
                        </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti suscipit, quia numquam temporibus ipsum tenetur quis ipsam reiciendis minus fugiat qui quod minima porro velit. Natus adipisci rem velit soluta.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo similique animi est repellat! Nulla, ipsam? <a href="#">At sunt ducimus id repellat eligendi. Error magni</a>, autem ipsa facilis asperiores beatae sapiente repudiandae!
                        </p>

                        <img src="/images/logo.svg" alt="imgagem do post" />

                        <ul>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iusto similique, nobis quibusdam.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iusto similique, nobis quibusdam.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iusto similique, nobis quibusdam.</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex iusto similique, nobis quibusdam.</li>
                        </ul>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti suscipit, quia numquam temporibus ipsum tenetur quis ipsam reiciendis minus fugiat qui quod minima porro velit. Natus adipisci rem velit soluta.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo similique animi est repellat! Nulla, ipsam? At sunt ducimus id repellat eligendi. Error magni, autem ipsa facilis asperiores beatae sapiente repudiandae!
                        </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti suscipit, quia numquam temporibus ipsum tenetur quis ipsam reiciendis minus fugiat qui quod minima porro velit. Natus adipisci rem velit soluta.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo similique animi est repellat! Nulla, ipsam? <a href="#">At sunt ducimus id repellat eligendi. Error magni</a>, autem ipsa facilis asperiores beatae sapiente repudiandae!
                        </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti suscipit, quia numquam temporibus ipsum tenetur quis ipsam reiciendis minus fugiat qui quod minima porro velit. Natus adipisci rem velit soluta.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo similique animi est repellat! Nulla, ipsam? At sunt ducimus id repellat eligendi. Error magni, autem ipsa facilis asperiores beatae sapiente repudiandae!
                        </p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti suscipit, quia numquam temporibus ipsum tenetur quis ipsam reiciendis minus fugiat qui quod minima porro velit. Natus adipisci rem velit soluta.
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo similique animi est repellat! Nulla, ipsam? <a href="#">At sunt ducimus id repellat eligendi. Error magni</a>, autem ipsa facilis asperiores beatae sapiente repudiandae!
                        </p>
                    </div>
                </main>
            </div>

            <div className="bg-zinc-900 w-[90%] mx-[5%] px-16 py-4 mt-[23px] rounded-md border-[3px] border-green-400 flex items-start flex-col">
                <h1 className="text-2xl font-bold">Comentários:</h1>
                <div className="flex flex-col gap-6">
                    <div className="flex w-full my-5">
                        <div className="flex items-center justify-center rounded-[50%] bg-slate-400 h-14 w-14 mt-4">
                            <BiUser className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col w-[90%] bg-zinc-800 rounded-2xl rounded-tl-none ml-3 gap-5 p-8">
                            <h3 className="text-xl font-medium">Jhon Doe</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis ex quae molestias numquam iusto eum sed odit, veniam repellat ipsa sint esse a quasi. Sunt recusandae eligendi asperiores eveniet!</p>
                        </div>
                    </div>

                    <div className="flex w-full my-5">
                        <div className="flex items-center justify-center rounded-[50%] bg-slate-400 h-14 w-14 mt-4">
                            <BiUser className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col w-[90%] bg-zinc-800 rounded-2xl rounded-tl-none ml-3 gap-5 p-8">
                            <h3 className="text-xl font-medium">Jhon Doe</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis ex quae molestias numquam iusto eum sed odit, veniam repellat ipsa sint esse a quasi. Sunt recusandae eligendi asperiores eveniet!</p>
                        </div>
                    </div>

                    <div className="flex w-full my-5">
                        <div className="flex items-center justify-center rounded-[50%] bg-slate-400 h-14 w-14 mt-4">
                            <BiUser className="w-8 h-8" />
                        </div>
                        <div className="flex flex-col w-[90%] bg-zinc-800 rounded-2xl rounded-tl-none ml-3 gap-5 p-8">
                            <h3 className="text-xl font-medium">Jhon Doe</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem veritatis ex quae molestias numquam iusto eum sed odit, veniam repellat ipsa sint esse a quasi. Sunt recusandae eligendi asperiores eveniet!</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}