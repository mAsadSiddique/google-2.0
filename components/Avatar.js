

function Avatar({ url }) {
    // console.log(src)
    return (
        <img
            loading='lazy'
            className='h-10 rounded-full cursor-pointer transition duration-100 duration-100
            transform hover:scale-110'
            src={url}
            alt='Profile Pic'
        />
    )
}

export default Avatar
