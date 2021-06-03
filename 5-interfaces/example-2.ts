{
    interface LabeledValue {
        label: string;
    }

    const printLabel = function(labeledObj: LabeledValue) {
        console.log(labeledObj);
    };

    const myObj = {size: 10, label: "Size 10 Object"};
    printLabel(myObj);
}
