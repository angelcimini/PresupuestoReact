export const revisarPresupuesto = (presupuesto, resto) => {
    let visual;

    if((presupuesto / 4) > resto) {visual = "alert alert-danger";}
    else if((presupuesto / 2) > resto){visual = "alert alert-warning";}
    else {visual= "alert alert-success";}

    return visual;
}