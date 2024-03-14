export const formatCurrenCy= price =>
    Number(price).toLocaleString('en-US',{
        style:'currency',
        currency:'USD'
    })