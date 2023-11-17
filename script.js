document.addEventListener('DOMContentLoaded', function() {
    addBox(); // Add the first box row on load
});

function addBox() {
    const parcelsDiv = document.getElementById('parcels');
    const div = document.createElement('div');
    div.innerHTML = `
        <input type="number" min="1" placeholder="수량" class="parcel-quantity">
        <input type="number" min="1" placeholder="길이 (cm)" class="parcel-dimension">
        <input type="number" min="1" placeholder="너비 (cm)" class="parcel-dimension">
        <input type="number" min="1" placeholder="높이 (cm)" class="parcel-dimension">
        <button class="remove-box" onclick="removeBox(this)">박스 제거</button>
    `;
    parcelsDiv.appendChild(div);
}

function removeBox(button) {
    button.parentElement.remove();
    calculateWeight(); // Recalculate after removing a box
}

function calculateWeight() {
    const parcels = document.querySelectorAll('#parcels div');
    let totalVolumetricWeight = 0;
    parcels.forEach(parcel => {
        const qty = parcel.querySelector('.parcel-quantity').value || 0;
        const length = parcel.querySelector('.parcel-dimension:nth-child(2)').value || 0;
        const width = parcel.querySelector('.parcel-dimension:nth-child(3)').value || 0;
        const height = parcel.querySelector('.parcel-dimension:nth-child(4)').value || 0;
        const volume = length * width * height;
        const weight = (volume / 6000) * qty;
        totalVolumetricWeight += weight;
    });
    document.getElementById('totalWeight').textContent = `총 부피 중량: ${totalVolumetricWeight.toFixed(2)} kg`;
}
