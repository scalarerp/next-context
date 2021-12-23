import { MotionInView, varScaleInX } from 'components/animate'
import React from 'react'
import GoogleMap from './Map'

const AppForm = () => {
    return (
        <div className="pt-32 mb-14">
            <div className="flex flex-wrap w-full mb-4 flex-col items-center text-center">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-brand">
                    Fale conosco
                </h1>
            </div>
            <div className="grid xl:grid-cols-2">
                <MotionInView variants={varScaleInX}>
                    <section className="flex items-center justify-center">
                        <GoogleMap />
                    </section>
                </MotionInView>
                <section className="-ml-8 flex justify-center items-center">
                    <form
                        action="https://formsubmit.co/mauriciogedrat@gmail.com"
                        method="POST"
                        className=""
                    >
                        <div className="relative mb-4">
                            <MotionInView variants={varScaleInX}>
                                <label
                                    For="name"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </MotionInView>
                        </div>
                        <div className="relative mb-4">
                            <MotionInView variants={varScaleInX}>
                                <label
                                    For="email"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                />
                            </MotionInView>
                        </div>
                        <div className="relative mb-4">
                            <MotionInView variants={varScaleInX}>
                                <label
                                    For="message"
                                    className="leading-7 text-sm text-gray-600"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                ></textarea>
                            </MotionInView>
                        </div>
                        <MotionInView variants={varScaleInX}>
                            <button className="text-white bg-brand border-0 py-2 px-6 duration-300 focus:outline-none hover:opacity-80 rounded text-lg">
                                Button
                            </button>
                            <p className="text-xs text-gray-500 mt-3">
                                Chicharrones blog helvetica normcore iceland
                                tousled brook viral artisan.
                            </p>
                        </MotionInView>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default AppForm
