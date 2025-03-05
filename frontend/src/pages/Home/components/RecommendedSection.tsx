import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import PlayButton from "./PlayButton"
import RecommendedSkeleton from "./recommendedSkeleton";
import { useMusicStore } from "@/stores/useMusicStore";

const RecommendedSection = () => {
    const { isLoading } = useMusicStore();


    if (isLoading) return <RecommendedSkeleton />

    return (
        <>
            <div className="flex bg-gradient-to-b from-zinc-800 to-zinc-900 rounded-lg p-6 border-zinc-950 m-2 mb-8 items-center ">
                <div className="flex ml-8 items-center">
                    
                    <div className="flex flex-col mt-7">
                        <div className="flex flex-col gap-8">
                            <span className=" text-zinc-500 text-3xl font-semibold">Trending New Hits</span>
                            <h1 className="font-semibold text-5xl">Aonde Você Está</h1>
                            <span className="font-semibold text-xl text-zinc-100/80">Djeniffer</span>
                        </div>
                        <div className="mt-15 flex items-center gap-5">
                            <Button variant={"default"} className="cursor-pointer">Play Now</Button>
                            <Button variant={'default'} size="icon" className="cursor-pointer">
                                <Heart />
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center ml-80">
                        <img src='conselhos.png' alt='Conselhos album cover' className="flex md:size-50 lg:size-70 items-center justify-center rounded-md" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default RecommendedSection