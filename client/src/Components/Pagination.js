import "./Pagination.css";

const Pagination = (props) => {
    const { page, pages, changePage } = props

    let middlePagination;

    if(pages <= 5){
        // if the ammount of pages are less than or equal to 5 
        middlePagination = [...Array(pages)].map((_, index)=>{

            return(
                <button 
                    key={index + 1}
                    onClick={()=>changePage(index + 1)}
                    disabled={page === index + 1}
                >
                    {index + 1}
                </button>
            )
        })
    }else{
        // there are more than five pages
        const startValue = Math.floor((page - 1)/5) * 5
        //console.log("START VALUE ---->", startValue)
        middlePagination = (
            <>
                {[...Array(5)].map((_, index)=>{
                    return (
                        <button
                            key={startValue + index + 1}
                            disabled={page  === startValue + index + 1}
                            onClick={()=>changePage(startValue + index + 1)}
                        >
                            {startValue + index + 1}
                        </button>
                    )
                })}

                <button onClick={()=>changePage(pages)}>last</button>
            </>
        );

        if(page > 5){
            // Current page is greater than five
            if(pages - page >= 5){
                middlePagination = (
                    <>
                        <button onClick={()=>changePage(1)}>first</button>
                        <button onClick={()=>changePage(startValue)}>{startValue}</button>
                        {[...Array(5)].map((_, index)=>{
                            return (
                                <button
                                    key={startValue + index + 1}
                                    disabled={page  === startValue + index + 1}
                                    onClick={()=>changePage(startValue + index + 1)}
                                >
                                    {startValue + index + 1}
                                </button>
                            )
                        })}
        
                        
                        <button onClick={()=>changePage(pages)}>
                            last
                        </button>
                    </>
                );
            }else{
                // current page - pages is less than five
                let ammountLeft = pages - page + 5;
                middlePagination = (
                    <>
                        <button onClick={()=>changePage(1)}>first</button>
                        <button onClick={()=>changePage(startValue)}>{startValue}</button>
                        {[...Array(ammountLeft)].map((_, index)=>{
                            return (
                                <button
                                    style={pages < startValue + index + 1 ? {display:"none"} : null}
                                    key={startValue + index + 1}
                                    disabled={page  === startValue + index + 1}
                                    onClick={()=>changePage(startValue + index + 1)}
                                >
                                    {startValue + index + 1}
                                </button>
                            )
                        })}
                    </>
                );
            }
        }
    }

    return (
        <>
            {pages > 1 &&(
                <div className="pagination">
                    <button className="pagination_prev"
                        onClick={()=>changePage(page => page -1)}
                        disabled={page === 1}
                    >
                        &#171;
                    </button>
                    {middlePagination}
                    <button className="pagination_next"
                        onClick={()=>changePage(page => page + 1)}
                        disabled={page === pages}
                    >
                        &#187;
                    </button>
                </div>
            )}
        </>
    )
}

export default Pagination