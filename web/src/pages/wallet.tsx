import { Menu } from "../components/Menu";

export default function Wallet() {
    return (
        <>
            <Menu />
            <div className="flex">
                <div className="ml-[150px] mt-[50px] flex bg-zinc-800 rounded-lg border-2 border-green-500">
                    <div className="w-[400px] flex flex-col items-center">
                        <h1 className="mt-[50px] text-4xl mb-4">Conversão</h1>
                        <table className="w-[100%] ml-20 flex flex-col gap-4">
                            <tr className="w-[100%]">
                                <td className="w-[10%]"><img src="/images/coin.svg" alt="moeda" /></td>
                                <td className="w-[30%] text-center">100 RC</td>
                                <td className="text-center w-[30%]">=</td>
                                <td className="w-[100px] text-right">R$ 00,01</td>
                            </tr>
                            <tr className="w-[100%]">
                                <td className="w-[10%]"><img src="/images/coin.svg" alt="moeda" /></td>
                                <td className="text-center w-[30%]">1000 RC</td>
                                <td className="text-center w-[30%]">=</td>
                                <td className="w-[100px] text-right">R$ 00,10</td>
                            </tr>
                            <tr className="w-[100%]">
                                <td className="w-[10%]"><img src="/images/coin.svg" alt="moeda" /></td>
                                <td className="text-center w-[30%]">2000 RC</td>
                                <td className="text-center w-[30%]">=</td>
                                <td className="w-[100px] text-right">R$ 00,20</td>
                            </tr>
                            <tr className="w-[100%]">
                                <td className="w-[10%]"><img src="/images/coin.svg" alt="moeda" /></td>
                                <td className="text-center w-[30%]">3000 RC</td>
                                <td className="text-center w-[30%]">=</td>
                                <td className="w-[100px] text-right">R$ 00,30</td>
                            </tr>
                            <tr className="w-[100%]">
                                <td className="w-[10%]"><img src="/images/coin.svg" alt="moeda" /></td>
                                <td className="text-center w-[30%]">4000 RC</td>
                                <td className="text-center w-[30%]">=</td>
                                <td className="w-[100px] text-right">R$ 00,40</td>
                            </tr>
                            <tr className="w-[100%]">
                                <td className="w-[10%]"><img src="/images/coin.svg" alt="moeda" /></td>
                                <td className="text-center w-[30%]">5000 RC</td>
                                <td className="text-center w-[30%]">=</td>
                                <td className="w-[100px] text-right">R$ 00,50</td>
                            </tr>
                            <tr className="w-[100%]">
                                <td className="w-[10%]"><img src="/images/coin.svg" alt="moeda" /></td>
                                <td className="text-center w-[30%]">6000 RC</td>
                                <td className="text-center w-[30%]">=</td>
                                <td className="w-[100px] text-right">R$ 00,60</td>
                            </tr>
                            <tr className="w-[100%]">
                                <td className="w-[10%]"><img src="/images/coin.svg" alt="moeda" /></td>
                                <td className="text-center w-[30%]">7000 RC</td>
                                <td className="text-center w-[30%]">=</td>
                                <td className="w-[100px] text-right">R$ 00,70</td>
                            </tr>
                        </table>
                    </div>
                    <img className="mt-[60px] h-[80%] ml-2" src="/images/linha.svg" alt="" />
                    <div className="w-[45%] mt-[50px] flex flex-col items-center">
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
                        <span className="pt-[5px] text-center rounded-[30px] w-[157px] border-4 border-green-500 h-[58px] bg-green-50 text-black">
                            Saldo <br /> R$ 00,20 
                        </span>
                        <span className="text-xs mt-[5px]">Enviar dinheiro</span>
                    </div>
                </div>
            </div>
        </>
    )
}