
import useInputs from "./useInputs";

const Info = () => {
    const [state, onChange] = useInputs({
        name: '',
        nickname: '',
        aaa: ''
    });

    const {name,nickname, aaa} = state;

    return (
        <div>
            <div>
                이름 : <input name="name" value={name} onChange={onChange}/>
                <br/>
                닉네임 : <input name="nickname" value={nickname} onChange={onChange}/>
                <br/>
                체크 : <input name="aaa" value={aaa} onChange={onChange}/>

            </div>
            <div>
                <p>이름: <b>{name}</b></p>
                <p>닉네임: <b>{nickname}</b></p>
            </div>
        </div>
    );
};

export default Info;