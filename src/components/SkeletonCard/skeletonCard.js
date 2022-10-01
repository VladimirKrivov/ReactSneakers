import ContentLoader from "react-content-loader";


function SkeletonCard() {
    return (
        Array(4).fill().map((item, index) =>(
            <div className="skeleton-card mb-20">
                <ContentLoader
                    speed={1}
                    width={210}
                    height={260}
                    viewBox="0 0 210 260"
                    backgroundColor="#d9d9d9"
                    foregroundColor="#bababa"
                >
                    <rect x="30" y="36" rx="10" ry="10" width="150" height="90" />
                    <rect x="30" y="143" rx="5" ry="5" width="150" height="15" />
                    <rect x="30" y="162" rx="6" ry="6" width="90" height="15" />
                    <rect x="30" y="199" rx="6" ry="6" width="80" height="25" />
                    <rect x="148" y="191" rx="6" ry="6" width="32" height="32" />
                </ContentLoader>
            </div>

        ))

    )

}
export default SkeletonCard;
