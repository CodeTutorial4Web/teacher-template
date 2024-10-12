


export default function UserAvatar({imageUrl, width, height}) {

    return (


        <div className="userAvatar" style={{
            minWidth: `${width}px`,
            minHeight: `${height}px`,
            maxWidth: `${width}px`,
            maxHeight: `${height}px`,
            aspectRatio: "1/1",
            borderRadius: "50%",
            backgroundImage: `url(${imageUrl != "" ? imageUrl : "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"})`,
            backgroundPosition: "center", 
            backgroundSize: "cover"
        }}> 
            


        </div>

    )
}