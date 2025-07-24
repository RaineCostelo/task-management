
const TasksList = (props) => {
    const rows = props.rows;
    const isLoading = props.isLoading;

    return (
        <div>
            <h2>Tasks</h2>
            {
                isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {rows?.map((row) => (
                            <>
                                <li key={row?._id}>Title: {row?.title}</li>
                                <p>Desc: {row?.description} | Due: {row?.due_date}</p>
                                <p>Prio: {row?.priority} | Status: {row?.status}</p>
                            </>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};

export default TasksList;