import Check from 'common/svgIcons/Check'
import Link from 'next/link'
import React from 'react'

const FormSucess = () => {
    return (
        <div>
            <div className="flex justify-center items-center mt-16">
                <div>
                    <div>
                        <h1 className="font-poppins text-5xl font-bold text-[#3b82f6] mb-10">
                            Sua mensagem foi enviada com sucesso
                        </h1>
                    </div>
                    <div className="flex justify-center">
                        <Check />
                    </div>
                    <div className="flex justify-center">
                        <Link href="/">
                            <a className="text-2xl text-[#3b82f6] font-poppins font-semibold">
                                Voltar ➝
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FormSucess
