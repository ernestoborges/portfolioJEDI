 export function ProfileImg({
    width,
    height
 }){

    return <>
        <div 
            className="profile-container"
            style={{
                width: width ? width + 'px' : '',
                height: height ? height + 'px' : ''
            }}
        >
            <img 
                alt="imagem de perfil" 
                src="https://avatars.githubusercontent.com/u/50407385?v=4" 
            />
        </div>
    </>
}