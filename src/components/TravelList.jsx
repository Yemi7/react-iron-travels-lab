import travelPlansData from '../assets/travel-plans.json';

export function TravelList() {

    return (
        <div>
            {travelPlansData.map((locationObj) => {
                return (
                    <div key={locationObj.id} className='location-container'>
                        <img src={locationObj.image} className='image' />
                        <div className='info'>
                            <h3>{locationObj.destination} ({locationObj.days} Days)</h3>
                            <p><em>{locationObj.description}</em></p>
                            <p><strong>Price:</strong> €{locationObj.totalCost}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}