export default function page(){

    let 상품 = ["Tomatoes", "pasta", "Coconut"];

    let a = [20, 30, 40];
    console.log(a[0]);
    console.log(a);
    return (
        <div>
            <h4 className="title">상품목록</h4>
            <div className="food">
                <h4>{상품[0]} $40</h4>
            </div>
            <div className="food">
                <h4>{상품[1]} $40</h4>
            </div>
            <div className="food">
                <h4>{상품[2]} $40</h4>
            </div>
            
            {상품.map((item, index) => (
                <div className="food" key={index}>
                    <h4>{item} $40</h4>
                </div>
            ))};
        </div>
    );
};

