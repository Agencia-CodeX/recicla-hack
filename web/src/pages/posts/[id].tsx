/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Menu } from "../../components/Menu";

import { BsFillHeartFill } from "react-icons/bs"
import { BsShare } from "react-icons/bs"
import { BiUser } from "react-icons/bi"

import styles from "./post.module.scss"

export default function UserPosts() {
    const [like, setLike] = useState(false);
    const [coutLike, setCountLike] = useState(200)
    const [coutShare, setCountShare] = useState(200)
    return (
        <>
            <Menu />
            <div className={styles.main}>
                <main className="bg-zinc-800 w-[90%] mx-[5%] p-16 mt-[23px] rounded-md border-[3px] border-green-400 flex items-center flex-col">
                    <div className="flex w-full justify-end gap-6">
                        <button
                            onClick={() => {
                                if (!like) {
                                    setCountLike(coutLike + 1)
                                } else {
                                    setCountLike(coutLike - 1)
                                }

                                setLike(!like)
                            }}>
                            <BsFillHeartFill className={like ? "w-[29px] h-[29px] text-[#df3131] hover:brightness-125 mb-1" : "w-[29px] h-[29px] text-[#AAAAAA] hover:brightness-125 mb-1"} />
                            <span>{coutLike}</span>
                        </button>
                        <button
                            onClick={() => {
                                setCountShare(coutShare + 1)
                            }}
                        >
                            <BsShare className="w-[29px] h-[29px] text-[#AAAAAA] hover:brightness-125 mb-1" />
                            <span>{coutShare}</span>
                        </button>
                    </div>

                    <div className="flex flex-col justify-center">
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
