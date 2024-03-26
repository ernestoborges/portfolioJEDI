import { useBeep } from "../providers/AudioProvider";

export function AudioBeep() {

    const { muted, toggleMute } = useBeep();

    return <>
        <div
            style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'center',
                marginLeft: '300px'
            }}
        >
            <div
                style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: !muted ? "#FF1111" : "#FF9999"
                }}
            />
            <div
                style={{
                    transform: 'rotate(-45deg)',
                    fontWeight: 'bold',
                    letterSpacing: '4px'
                }}
            >
                <div
                    onClick={toggleMute}
                    style={{
                        width: '60px',
                        height: '20px',
                        backgroundColor: "#404040",
                        borderRadius: '20px',
                        cursor: 'pointer'
                    }}
                >
                </div>
                <div>MUTE</div>
            </div>


        </div>
    </>
}