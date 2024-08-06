import "./cards.scss";

function Cards({ item }) {

    console.log(item);
    return (
        <div className="cards">
            <img className={`cardImg ${item.name}`} src={item.img} alt="" />
            <h3>{item.text}</h3>
            <div className="totalCont">
                <span className="count">{item.total}</span>
                <div className="arrow">
                    {item.status === "profit" ?
                        (
                            <>
                                <img className="profit" src="/arrow-up.png" alt="" />
                                <span className="profit">{item.percentage} %</span>
                            </>
                        )
                        :
                        (
                            <>
                                <img className="loss" src="/down.png" alt="" />
                                <span className="loss">{item.percentage} %</span>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
}

export default Cards;