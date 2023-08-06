$(document).ready(() => {
    $('.post-up').click(async function() {
        const professorId = $(this).attr("data-professor-id");
        var counter = $(this).parents().children()[1]
        try {
            const response = await fetch('/professors-page/upvote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: professorId }),
            });

            if (response.ok) {
                const data = await response.json();
                // Assuming you have a DOM element that displays the downvotes count
                // You can update it here based on the response data
                counter.innerHTML = `<strong>${data.updatedProfessor.upvotes}</strong> Upvotes`
            } else {
                console.error('Failed to upvote:', response.statusText);
            }
        } catch (error) {
            console.error('Error upvoting:', error);
        }
    })

    // Similar logic for downvoting
    $('.post-down').click(async function() {
        const professorId = $(this).attr("data-professor-id");
        var counter = $(this).parents().children()[3]
        try {
            const response = await fetch('/professors-page/downvote', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ _id: professorId }),
            });

            if (response.ok) {
                const data = await response.json();
                // Assuming you have a DOM element that displays the downvotes count
                // You can update it here based on the response data
                counter.innerHTML = `<strong>${data.updatedProfessor.downvotes}</strong> Downvotes`
            } else {
                console.error('Failed to downvote:', response.statusText);
            }
        } catch (error) {
            console.error('Error downvoting:', error);
        }
    });
})
