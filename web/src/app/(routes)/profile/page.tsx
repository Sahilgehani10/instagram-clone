import Postsgrid from "@/components/Postsgrid";
import { CheckIcon, ChevronLeft, Cog } from "lucide-react";
import Link from "next/link";

export default function ProfilePage(){
    return(
        <main>
            <section className="flex justify-between items-center">
                <button>
                   <ChevronLeft/>
                </button>
                <div className="font-bold flex items-center gap-2">
                    username
                    <div className="size-5 rounded-full bg-ig-red inline-flex justify-center items-center text-white">
                        <CheckIcon size={16}/>
                    </div>
                </div>
                <button>
                    <Cog />
                </button>

            </section>
            <section className="mt-8 flex justify-center">
                <div className="size-48 p-2 rounded-full bg-gradient-to-tr from-ig-orange to-ig-red">
                    <div className="size-44 p-2 bg-white rounded-full">
                        <div className="size-40 aspect-square overflow-hidden rounded-full">
                            <img src="https://images.unsplash.com/photo-1729396877734-801af2fa5709?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>
                </div>    
                
            </section>
            <section className="text-center mt-4">
                <h1 className="text-xl font-bold">Johny</h1>
                <p className="text-gray-500 mx-1">Business Account</p>
                <p>
                    Entrepeneur,Husband,Father<br />
                    contact:johny@gmail.com
                </p>
            </section>
            <section className="mt-4">
                <div className="flex justify-center gap-4 font-bold">
                    <Link href={''}>Posts</Link>
                    <Link className="text-gray-400" href={'/highlight'}>Highlights</Link>
                </div>
            </section>
            <section className="mt-4">
                <Postsgrid />
            </section>
        </main>
    )
}