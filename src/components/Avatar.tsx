interface AvatarProps {
    src: string;
    alt: string;
    isOnline?: boolean;
    size?: 'small' | 'medium' | 'large';
}

const Avatar = ({ src, alt, isOnline = false, size = 'medium' }: AvatarProps) => {
    const sizeClasses = {
        small: 'w-10 h-10',
        medium: 'w-12 h-12',
        large: 'w-16 h-16'
    };

    return (
        <div className={`relative flex-shrink-0 ${sizeClasses[size]}`}>
            <img className="w-full h-full rounded-full object-cover" src={src} alt={alt} />
            {isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            )}
        </div>
    );
};

export default Avatar;