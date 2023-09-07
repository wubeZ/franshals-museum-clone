

const FormSection = () => {
  return (
    <div className="lg:my-24 py-8 px-10 text-center lg:border-r-4 lg:border-slate-900">
        <p className="font-primaryFont text-lg lg:text-3xl font-bold">Frans Hal Museum likes to send you emails</p>
        <form action="" className="flex justify-center gap-4 mt-8">
            <input type="text" className="bg-primaryColor-200 w-40 lg:w-60  outline-none border-b-2 border-slate-900 placeholder:text-green-900" placeholder="Name" />
            <input type="text" className="bg-primaryColor-200 w-40 lg:w-60 border-b-2 outline-none border-slate-900 placeholder:text-green-900" placeholder="Email" />
        </form>
            <button className="mt-6 lg:mt-12 rounded-full bg-[#c5b25e] text-[#f1d96e] py-2 px-8">signup</button>

    </div>
  )
}

export default FormSection