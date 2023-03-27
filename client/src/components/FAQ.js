import React from 'react'

export default function FAQ() {
  return (
    <div>
        <h2>Frequently Asked Questions</h2>
             <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                Question #1
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam assumenda voluptatem deserunt, nostrum accusamus cum laudantium, atque officia aperiam asperiores illum consequatur amet harum. Nisi quos quam facilis accusamus?</div>
            </div>
        </div>
        
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                Question #2
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam assumenda voluptatem deserunt, nostrum accusamus cum laudantium, atque officia aperiam asperiores illum consequatur amet harum. Nisi quos quam facilis accusamus?</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Question Item #3
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur aliquam assumenda voluptatem deserunt, nostrum accusamus cum laudantium, atque officia aperiam asperiores illum consequatur amet harum. Nisi quos quam facilis accusamus?</div>
            </div>
        </div>
        </div>
    </div>
  )
}
