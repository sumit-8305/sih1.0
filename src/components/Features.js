import React from 'react'

const Features = () => {
  return (
    <div className='relative overflow-hidden'
    style={{
      background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='768' height='696' viewBox='0 0 768 696' fill='none'%3E%3Cpath d='M70.4613 131C1.66127 92.2 -13.5387 -63 10.9613 -115H912.461L968.461 689C905.128 698.167 756.261 705 667.461 659C556.461 601.5 555.854 563.797 525.961 498.5C493 426.5 442.5 380.5 339 380.5C269.457 380.5 226.182 313.365 206.961 260C160.5 131 156.461 179.5 70.4613 131Z' fill='%23D1F4FC'/%3E%3C/svg%3E") no-repeat top right`,
      backgroundSize: 'contain',
      height: 'auto',
      rotate: (180,0,0),
    }}>
      <h1 className='text-9xl'>hello these are features </h1>
    </div>
  )
}

export default Features;
