import {Card} from "./UI/Card";

export const BatchItem = ({index = 1, batchItems = [], batchOrder, onDeleteBatch }) => {

    const onRemoveButchHandler = (batchIndex) => {
        onDeleteBatch(batchIndex);
    }

    return (
        <Card>
            <div className='d-flex align-items-center'>
                <strong><span>Batch</span> <span>{batchOrder}</span></strong>
                <button  className='btn ml-1' onClick={() => onRemoveButchHandler(index)}>Remove</button>
            </div>
            <div>
                <table>
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Text</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        batchItems.map(({id, title}) => (
                            <tr key={index+id}>
                                <td>{id}</td>
                                <td>{title}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </Card>
    )
}
