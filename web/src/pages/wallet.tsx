import { Menu } from "../components/Menu";

export default function Wallet() {
    return (
        <>
            <Menu />
            <div className="flex">
                <div className="ml-[150px] mt-[50px] px-4 flex bg-zinc-800 rounded-lg border-2 border-green-500">
                    <div className="w-[400px] flex flex-col items-center">
                        <h1 className="mt-[50px] text-4xl mb-4">Conversão</h1>
                        <div className="w-full ml-20 flex flex-col gap-4">
                            <div className="flex w-full items-center">
                                <div className="w-[40px] flex justify-start"><img src="/images/coin.svg" alt="moeda" /></div>
                                <div className="w-[100px] text-center"><span>100 RC</span></div>
                                <div className="w-[100px] text-center"><span>=</span></div>
                                <div className="w-[100px] text-right"><span>R$ 00,01</span></div>
                            </div>

                            <div className="flex w-full items-center">
                                <div className="w-[40px] flex justify-start"><img src="/images/coin.svg" alt="moeda" /></div>
                                <div className="w-[100px] text-center"><span>1000 RC</span></div>
                                <div className="w-[100px] text-center"><span>=</span></div>
                                <div className="w-[100px] text-right"><span>R$ 00,10</span></div>
                            </div>

                            <div className="flex w-full items-center">
                                <div className="w-[40px] flex justify-start"><img src="/images/coin.svg" alt="moeda" /></div>
                                <div className="w-[100px] text-center"><span>2000 RC</span></div>
                                <div className="w-[100px] text-center"><span>=</span></div>
                                <div className="w-[100px] text-right"><span>R$ 00,20</span></div>
                            </div>

                            <div className="flex w-full items-center">
                                <div className="w-[40px] flex justify-start"><img src="/images/coin.svg" alt="moeda" /></div>
                                <div className="w-[100px] text-center"><span>3000 RC</span></div>
                                <div className="w-[100px] text-center"><span>=</span></div>
                                <div className="w-[100px] text-right"><span>R$ 00,30</span></div>
                            </div>

                            <div className="flex w-full items-center">
                                <div className="w-[40px] flex justify-start"><img src="/images/coin.svg" alt="moeda" /></div>
                                <div className="w-[100px] text-center"><span>4000 RC</span></div>
                                <div className="w-[100px] text-center"><span>=</span></div>
                                <div className="w-[100px] text-right"><span>R$ 00,40</span></div>
                            </div>

                            <div className="flex w-full items-center">
                                <div className="w-[40px] flex justify-start"><img src="/images/coin.svg" alt="moeda" /></div>
                                <div className="w-[100px] text-center"><span>5000 RC</span></div>
                                <div className="w-[100px] text-center"><span>=</span></div>
                                <div className="w-[100px] text-right"><span>R$ 00,50</span></div>
                            </div>

                            <div className="flex w-full items-center">
                                <div className="w-[40px] flex justify-start"><img src="/images/coin.svg" alt="moeda" /></div>
                                <div className="w-[100px] text-center"><span>6000 RC</span></div>
                                <div className="w-[100px] text-center"><span>=</span></div>
                                <div className="w-[100px] text-right"><span>R$ 00,60</span></div>
                            </div>

                            <div className="flex w-full items-center">
                                <div className="w-[40px] flex justify-start"><img src="/images/coin.svg" alt="moeda" /></div>
                                <div className="w-[100px] text-center"><span>7000 RC</span></div>
                                <div className="w-[100px] text-center"><span>=</span></div>
                                <div className="w-[100px] text-right"><span>R$ 00,70</span></div>
                            </div>
                        </div>
                    </div>
                    <img className="mt-[60px] h-[80%] ml-2" src="/images/linha.svg" alt="" />
                    <div className="w-[330px] mt-[50px] flex flex-col items-center">
                        <h1 className="text-4xl text-center">Suas <br /> Conquistas</h1>
                        <h2 className="text-[25px] mt-[14px]">Parabéns!</h2>
                        <p className="mt-[9px] text-center">
                            Você atingiu um bônus <br />
                            de X3 pelas suas <br />
                            últimas postagens
                        </p>
                        <div className="flex flex-row gap-5 mt-[20px]">
                            <div className="w-[full] flex items-center">
                                <img src="/images/coin.svg" alt="icone moeda" />
                                <span className="ml-[10px]">2000 RC</span>
                            </div>
                            <span>=</span>
                            <span>R$ 00,20</span>
                        </div>

                        <div className="flex gap-5 mt-[19px]">
                            <span>Usuários convidados</span>
                            <span>=</span>
                            <span>15</span>
                        </div>

                        <div className="flex gap-5 mt-[19px]">
                            <span>posts seus compartilhados</span>
                            <span>=</span>
                            <span>60</span>
                        </div>

                        <div className="flex gap-5 mt-[19px]">
                            <span>Likes em seus posts</span>
                            <span>=</span>
                            <span>159</span>
                        </div>

                        <span className="mt-[20px]">Seu link para convite:</span>
                        <a className="mb-[27px]" href="#">www.recicla.com.br</a>
                    </div>
                </div>
                <div className="w-[304px] h-[423px] mt-[115px] ml-[84px] bg-zinc-800 rounded-lg">
                    <img className="p-[16px]" src="/images/cartao.svg" alt="coin" />
                    <ul className="flex flex-col gap-2">
                        <li className="flex justify-between px-5">
                            <span>Banco</span>
                            <span>Any Bank</span>
                        </li>
                        <li className="flex justify-between px-5">
                            <span>Agência</span>
                            <span>xxx-x</span>
                        </li>
                        <li className="flex justify-between px-5">
                            <span>Cc</span>
                            <span>xxxxxxx-x</span>
                        </li>
                        <li className="flex justify-between px-5">
                            <span>Conta</span>
                            <span>Corrente</span>
                        </li>
                        <li className="flex justify-between px-5">
                            <span>Nome</span>
                            <span>John Doe</span>
                        </li>
                    </ul>
                    <div className="flex flex-col items-center mt-[10px]">
                        <span className="pt-[1px] pb-2 text-center rounded-[30px] w-[157px] border-4 border-green-500 h-[58px] bg-green-50 text-black">
                            Saldo <br /> R$ 00,20
                        </span>
                        <span className="text-xs mt-[5px]">Enviar dinheiro</span>
                    </div>
                </div>
            </div>

        </>
    )
}