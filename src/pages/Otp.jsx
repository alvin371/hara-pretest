import { useState } from "react";
import OtpInput from "react18-input-otp";

const Otp = () => {
    const [otp, setOtp] = useState('');
    const handleResendOTP = () => {

    }
    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                OTP Verification
                            </h1>
                            <form className="space-y-4 md:space-y-6 " action="#">
                                <div className="flex flex-row justify-center mx-auto">
                                    <OtpInput className="px-6 py-2 border border-gray-400 rounded-lg mx-2" value={otp} onChange={(e) => setOtp(e)} numInputs={4} />
                                </div>
                                <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Verifikasi</button>
                            </form>
                            <div className="flex flex-row justify-center mx-auto">
                                <h1 onClick={() => handleResendOTP()}>Kirim Ulang Kode OTP</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Otp;