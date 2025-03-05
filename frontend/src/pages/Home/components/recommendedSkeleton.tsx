import { Skeleton } from "@/components/ui/skeleton";

const RecommendedSkeleton = () => {
    return (
        <div className="flex flex-row justify-between items-center w-full mb-9">
            <div className="space-y-4 ml-10">
                <Skeleton className="h-6 w-[400px]" />
                <Skeleton className="h-6 w-[350px]" />
                <Skeleton className="h-6 w-[300px]" />
            </div>
            <Skeleton className="h-[250px] w-[250px] rounded-xl mr-10" />
        </div>
    );
}
export default RecommendedSkeleton;