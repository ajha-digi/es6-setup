import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonWrapper = () => {

    return (
        <SkeletonTheme baseColor="#ede7e7" highlightColor="#444">
            <Skeleton  height={200} />
        </SkeletonTheme>
    )
}

export default SkeletonWrapper;
