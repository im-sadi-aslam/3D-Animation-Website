  const ASSETS = {
            poster: 'https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
            gallery: [
                'https://lh3.googleusercontent.com/proxy/AwFJ68oMzuNeo8rMQCrcKxfYl0GhQUtfdhCXZU4qY_rOUmnVnMaq5t-nB5ibIF7CgzPzzBIdyK5rxY5hiE-CFFaI5_UMpJPrmW_Z',
                
                'https://m.media-amazon.com/images/M/MV5BMGUwMmIyMzgtMDA2Mi00ZmJkLTljNjItY2E1YWIyYTVlMGY2XkEyXkFqcGc@._V1_.jpg',

                'https://static0.moviewebimages.com/wordpress/wp-content/uploads/article-content/Yp2dnip4iF0JzV2qKTOupw77kvauYB.jpg?q=50&fit=crop&w=750&dpr=1.5',

                'https://lh3.googleusercontent.com/proxy/AwFJ68oMzuNeo8rMQCrcKxfYl0GhQUtfdhCXZU4qY_rOUmnVnMaq5t-nB5ibIF7CgzPzzBIdyK5rxY5hiE-CFFaI5_UMpJPrmW_Z',

                'https://m.media-amazon.com/images/M/MV5BMGUwMmIyMzgtMDA2Mi00ZmJkLTljNjItY2E1YWIyYTVlMGY2XkEyXkFqcGc@._V1_.jpg',

                'https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',

                'https://lh3.googleusercontent.com/proxy/AwFJ68oMzuNeo8rMQCrcKxfYl0GhQUtfdhCXZU4qY_rOUmnVnMaq5t-nB5ibIF7CgzPzzBIdyK5rxY5hiE-CFFaI5_UMpJPrmW_Z',

                'https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
            ],
            trailer: 'https://www.youtube.com/embed/QOdF1zK4ZkY?si=XnSkZEKDvwic_KkY'
        };

        document.getElementById('bigPosterImg').src = ASSETS.poster;

        const poster = document.getElementById('bigPoster');
        function posterTilt(e){
            const el = e.currentTarget || e.target;
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            const rx = (y * 12).toFixed(2);
            const ry = (x * -12).toFixed(2);
            el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(1.03)`;
            el.style.boxShadow = '0 48px 100px rgba(2,6,23,0.7), 0 0 30px rgba(124, 92, 255, 0.3)';
        }
        function posterReset(){ 
            poster.style.transform='rotateY(-5deg) rotateX(5deg)'; 
            poster.style.boxShadow='0 30px 60px rgba(2, 6, 23, 0.8), inset 0 1px 0 rgba(255, 255, 255, 0.03)'; 
        }

        function tilt(e,el){
            const rect = el.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            const rx = (y * 8).toFixed(2);
            const ry = (x * -8).toFixed(2);
            el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) translateZ(10px)`;
            el.style.boxShadow = '0 25px 50px rgba(2,6,23,0.8), 0 0 20px rgba(124, 92, 255, 0.2)';
        }
        function resetTilt(el){ 
            el.style.transform=''; 
            el.style.boxShadow='0 15px 35px rgba(2, 6, 23, 0.6)'; 
        }

        function openModal(url){
            const m = document.getElementById('modal');
            document.getElementById('modalFrame').src = url + '?autoplay=1&rel=0';
            m.classList.add('show');
        }
        function closeModal(e){
            if(e.target && (e.target.id==='modal' || e.target.classList.contains('modal-close'))){
                document.getElementById('modalFrame').src='';
                document.getElementById('modal').classList.remove('show');
            }
        }

        let lbIndex = 0;
        function openLightbox(i){ 
            lbIndex = i; 
            document.getElementById('lbImg').src = ASSETS.gallery[lbIndex]; 
            document.getElementById('lightbox').classList.add('show'); 
        }
        function closeLightbox(e){ 
            if(e.target && (e.target.id==='lightbox' || e.target.classList.contains('modal-close'))){ 
                document.getElementById('lightbox').classList.remove('show'); 
            }
        }
        function lbNext(e){ 
            if(e) e.stopPropagation(); 
            lbIndex = (lbIndex+1)%ASSETS.gallery.length; 
            document.getElementById('lbImg').src = ASSETS.gallery[lbIndex]; 
        }
        function lbPrev(e){ 
            if(e) e.stopPropagation(); 
            lbIndex = (lbIndex-1+ASSETS.gallery.length)%ASSETS.gallery.length; 
            document.getElementById('lbImg').src = ASSETS.gallery[lbIndex]; 
        }

        document.getElementById('themeBtn').addEventListener('click', ()=>{
            if(document.body.getAttribute('data-theme') === 'dark'){ 
                document.body.setAttribute('data-theme','light'); 
            } else { 
                document.body.setAttribute('data-theme','dark'); 
            }
        });

        document.addEventListener('keydown', (ev)=>{
            if(document.getElementById('lightbox').classList.contains('show')){
                if(ev.key === 'ArrowRight') lbNext(ev);
                if(ev.key === 'ArrowLeft') lbPrev(ev);
                if(ev.key === 'Escape') closeLightbox({target:document.getElementById('lightbox')});
            }
            if(document.getElementById('modal').classList.contains('show')){
                if(ev.key === 'Escape') closeModal({target:document.getElementById('modal')});
            }
        });

        window.addEventListener('scroll', function() {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        let selectedMovie = null;
        let selectedTime = null;
        let selectedSeats = [];

        function selectMovie(element, movie) {
            document.querySelectorAll('.movie-option').forEach(opt => opt.classList.remove('selected'));
            element.classList.add('selected');
            selectedMovie = movie;
            updateBookingSummary();
        }

        function selectTime(element, time) {
            document.querySelectorAll('.time-option').forEach(opt => opt.classList.remove('selected'));
            element.classList.add('selected');
            selectedTime = time;
            updateBookingSummary();
        }

        function selectSeat(element) {
            if (element.classList.contains('occupied')) return;
            
            element.classList.toggle('selected');
            const seatId = element.getAttribute('data-seat');
            
            if (selectedSeats.includes(seatId)) {
                selectedSeats = selectedSeats.filter(s => s !== seatId);
            } else {
                selectedSeats.push(seatId);
            }
            
            updateBookingSummary();
        }

        function generateSeats() {
            const container = document.getElementById('seatsContainer');
            container.innerHTML = '';
            
            const rows = ['A', 'B', 'C', 'D', 'E', 'F'];
            const seatsPerRow = 8;
            
            rows.forEach(row => {
                const rowDiv = document.createElement('div');
                rowDiv.className = 'seat-row';
                
                for (let i = 1; i <= seatsPerRow; i++) {
                    const seat = document.createElement('div');
                    seat.className = 'seat';
                    seat.setAttribute('data-seat', `${row}${i}`);
                    seat.textContent = `${row}${i}`;
                    
                    if (Math.random() < 0.3) {
                        seat.classList.add('occupied');
                    } else {
                        seat.addEventListener('click', () => selectSeat(seat));
                    }
                    
                    rowDiv.appendChild(seat);
                }
                
                container.appendChild(rowDiv);
            });
        }

        function updateBookingSummary() {
            document.getElementById('summaryMovie').textContent = selectedMovie || '-';
            document.getElementById('summaryTime').textContent = selectedTime || '-';
            document.getElementById('summarySeats').textContent = selectedSeats.length > 0 ? selectedSeats.join(', ') : '-';
            document.getElementById('summaryTickets').textContent = selectedSeats.length;
            
            const total = selectedSeats.length * 15.99;
            document.getElementById('summaryTotal').textContent = total > 0 ? `$${total.toFixed(2)}` : '$0.00';
        }

        function confirmBooking() {
            if (!selectedMovie || !selectedTime || selectedSeats.length === 0) {
                alert('Please complete your booking by selecting a movie, showtime, and at least one seat.');
                return;
            }
            
            alert(`Booking confirmed!\n\nMovie: ${selectedMovie}\nTime: ${selectedTime}\nSeats: ${selectedSeats.join(', ')}\nTotal: $${(selectedSeats.length * 15.99).toFixed(2)}\n\nThank you for choosing Stellar Animation Studios!`);
            
            selectedMovie = null;
            selectedTime = null;
            selectedSeats = [];
            document.querySelectorAll('.movie-option, .time-option, .seat').forEach(el => el.classList.remove('selected'));
            updateBookingSummary();
        }

        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
        }

        document.addEventListener('DOMContentLoaded', function() {
            generateSeats();
        });