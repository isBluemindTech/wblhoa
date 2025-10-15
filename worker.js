export default {
  async fetch(request) {
    const url = new URL(request.url);
    const pathname = url.pathname;

    // Route handling
    let page = 'home';
    if (pathname === '/' || pathname === '/index.html') page = 'home';
    else if (pathname === '/news-for-residents.html') page = 'news';
    else if (pathname === '/map.html') page = 'map';
    else if (pathname === '/hoa-contact-information.html') page = 'hoa-contact';
    else if (pathname === '/payment-information.html') page = 'payment';
    else if (pathname === '/mission.html') page = 'mission';
    else if (pathname === '/community-club-house.html') page = 'clubhouse';
    else if (pathname === '/board-of-directors.html') page = 'board';
    else if (pathname === '/monthly-meeting-schedule.html') page = 'meetings';
    else if (pathname === '/insurance-info.html') page = 'insurance';
    else if (pathname === '/agent-contact-info.html') page = 'agent';
    else if (pathname === '/contact-property-manager.html') page = 'property-manager';
    else if (pathname === '/community-forms.html') page = 'forms';
    else if (pathname === '/community-pictures.html') page = 'pictures';
    else if (pathname === '/covenants--restrictions.html') page = 'covenants';
    else if (pathname === '/rules--regulations.html') page = 'rules';
    else if (pathname === '/privacy-policy.html') page = 'privacy';

    return new Response(getHTML(page), {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=3600',
      },
    });
  },
};

function getHTML(page) {
  const navItems = [
    { label: 'HOME', href: '/' },
    { label: 'News for Residents', href: '/news-for-residents.html' },
    { label: 'Map', href: '/map.html' },
    { label: 'HOA Contact', href: '/hoa-contact-information.html' },
    { label: 'Payment Info', href: '/payment-information.html' },
    { label: 'Mission', href: '/mission.html' },
    { label: 'Club House', href: '/community-club-house.html' },
    { label: 'Board', href: '/board-of-directors.html' },
    { label: 'Meetings', href: '/monthly-meeting-schedule.html' },
    { label: 'Insurance', href: '/insurance-info.html' },
    { label: 'Agent Contact', href: '/agent-contact-info.html' },
    { label: 'Property Manager', href: '/contact-property-manager.html' },
    { label: 'Forms', href: '/community-forms.html' },
    { label: 'Pictures', href: '/community-pictures.html' },
    { label: 'Covenants', href: '/covenants--restrictions.html' },
    { label: 'Rules', href: '/rules--regulations.html' },
    { label: 'Privacy', href: '/privacy-policy.html' },
  ];

  const navHTML = navItems.map(item => `
    <a href="${item.href}" class="text-sm font-medium hover:text-blue-400 transition-colors ${page === item.href.split('/')[1].split('.')[0] ? 'text-blue-400' : ''}">${item.label}</a>
  `).join('');

  const mobileNavHTML = navItems.map(item => `
    <a href="${item.href}" class="block py-2 text-sm hover:text-blue-400 transition-colors">${item.label}</a>
  `).join('');

  let content = '';

  if (page === 'home') {
    content = `
      <section class="relative py-20 px-4 sm:px-6 overflow-hidden">
        <div class="max-w-6xl mx-auto text-center">
          <div class="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/50">
            <span class="text-blue-300 text-sm font-semibold">Welcome to Our Community</span>
          </div>
          <h1 class="text-5xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Woodbridge Lakes</h1>
          <p class="text-xl text-slate-300 mb-2">West Palm Beach, Florida</p>
          <p class="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed mb-8">A vibrant community of 92 townhomes with exceptional amenities and a strong sense of neighborhood</p>
        </div>
      </section>

      <section class="py-20 px-4 sm:px-6 bg-slate-800/50">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold mb-12 text-center">About Our Community</h2>
          <div class="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p class="text-slate-300 leading-relaxed mb-6">Woodbridge Lakes is a thoughtfully designed community featuring 92 townhomes located just off Forest Hill Boulevard, between Congress Avenue and Military Trail in West Palm Beach, Florida.</p>
              <p class="text-slate-300 leading-relaxed mb-6">Most units overlook two serene lakes nestled in the heart of our community, creating a peaceful and picturesque living environment for our residents and their families.</p>
              <div class="flex items-start gap-4">
                <svg class="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                <div><h3 class="font-semibold mb-2">Prime Location</h3><p class="text-slate-400 text-sm">Forest Hill Blvd, between Congress Ave & Military Trail</p></div>
              </div>
            </div>
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-8 border border-blue-400/30 space-y-4">
              <div class="flex items-center gap-3"><svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v4h8v-4z"></path></svg><span>92 Quality Townhomes</span></div>
              <div class="flex items-center gap-3"><svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg><span>Two Beautiful Lakes</span></div>
              <div class="flex items-center gap-3"><svg class="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9 4.804C9 4.36 9.359 4 9.833 4h.334c.474 0 .833.36.833.804v15.392c0 .444-.359.804-.833.804h-.334c-.474 0-.833-.36-.833-.804V4.804z"></path></svg><span>Premium Amenities</span></div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-6xl mx-auto">
          <h2 class="text-4xl font-bold mb-12 text-center">Community Amenities</h2>
          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-400/50 transition-colors">
              <svg class="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9"></path></svg>
              <h3 class="text-xl font-bold mb-2">Clubhouse</h3>
              <p class="text-slate-400">A gathering place for community events and social activities</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-400/50 transition-colors">
              <svg class="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9"></path></svg>
              <h3 class="text-xl font-bold mb-2">Swimming Pool</h3>
              <p class="text-slate-400">Refreshing aquatic recreation for families year-round</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700 hover:border-blue-400/50 transition-colors">
              <svg class="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              <h3 class="text-xl font-bold mb-2">Tennis Courts</h3>
              <p class="text-slate-400">Newly refurbished courts for active community members</p>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'news') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">News for Residents</h1>
          <div class="space-y-8">
            <article class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h2 class="text-2xl font-bold mb-2">Latest Community Updates</h2>
              <p class="text-slate-400 text-sm mb-4">Posted Today</p>
              <p class="text-slate-300 leading-relaxed mb-4">Stay informed about the latest happenings in our community. Check back regularly for important announcements, maintenance notices, and community events.</p>
            </article>
            <article class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h2 class="text-2xl font-bold mb-2">Upcoming Events</h2>
              <p class="text-slate-400 text-sm mb-4">This Month</p>
              <p class="text-slate-300 leading-relaxed">Join us for community gatherings and social events at our clubhouse. Contact the property manager for specific dates and details.</p>
            </article>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'map') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Community Map</h1>
          <div class="bg-slate-800/50 rounded-lg p-12 border border-slate-700 text-center">
            <svg class="w-full h-96 mb-6" fill="none" stroke="currentColor" viewBox="0 0 400 300">
              <rect x="20" y="20" width="360" height="260" stroke="currentColor" stroke-width="2" fill="none"/>
              <circle cx="200" cy="80" r="40" fill="rgba(59, 130, 246, 0.2)" stroke="rgb(59, 130, 246)" stroke-width="2"/>
              <circle cx="200" cy="200" r="50" fill="rgba(59, 130, 246, 0.2)" stroke="rgb(59, 130, 246)" stroke-width="2"/>
              <text x="200" y="85" text-anchor="middle" fill="currentColor" font-size="12" font-weight="bold">Clubhouse</text>
              <text x="200" y="210" text-anchor="middle" fill="currentColor" font-size="14" font-weight="bold">Lakes</text>
            </svg>
            <p class="text-slate-400 mb-4">Interactive map showing community locations and amenities</p>
            <p class="text-slate-500 text-sm">For detailed mapping information, please contact the property manager</p>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'hoa-contact') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">HOA Contact Information</h1>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h2 class="text-2xl font-bold mb-6 text-blue-400">Main Office</h2>
              <div class="space-y-4">
                <div>
                  <p class="text-slate-400 text-sm">Phone</p>
                  <p class="text-xl font-semibold"><a href="tel:" class="hover:text-blue-400">Contact Property Manager</a></p>
                </div>
                <div>
                  <p class="text-slate-400 text-sm">Email</p>
                  <p class="text-slate-300">hoa@wblhoa.org</p>
                </div>
                <div>
                  <p class="text-slate-400 text-sm">Office Hours</p>
                  <p class="text-slate-300">Monday - Friday: 9AM - 5PM</p>
                </div>
              </div>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h2 class="text-2xl font-bold mb-6 text-blue-400">Quick Links</h2>
              <ul class="space-y-3">
                <li><a href="/contact-property-manager.html" class="text-blue-400 hover:text-cyan-400">Contact Property Manager</a></li>
                <li><a href="/payment-information.html" class="text-blue-400 hover:text-cyan-400">Payment Information</a></li>
                <li><a href="/board-of-directors.html" class="text-blue-400 hover:text-cyan-400">Board of Directors</a></li>
                <li><a href="/monthly-meeting-schedule.html" class="text-blue-400 hover:text-cyan-400">Monthly Meetings</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'payment') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Payment Information</h1>
          <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-8">
            <h2 class="text-2xl font-bold mb-6">HOA Dues Payment</h2>
            <p class="text-slate-300 leading-relaxed mb-6">Make your HOA payment through one of the following methods:</p>
            <div class="space-y-4">
              <div class="bg-slate-900/50 rounded p-4">
                <p class="font-bold text-blue-300 mb-2">Online Payment</p>
                <p class="text-slate-400 text-sm">Visit our payment portal to pay online securely</p>
              </div>
              <div class="bg-slate-900/50 rounded p-4">
                <p class="font-bold text-blue-300 mb-2">Mail Payment</p>
                <p class="text-slate-400 text-sm">Send checks to the property management office</p>
              </div>
              <div class="bg-slate-900/50 rounded p-4">
                <p class="font-bold text-blue-300 mb-2">Auto-Pay</p>
                <p class="text-slate-400 text-sm">Set up automatic monthly payments for convenience</p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-red-500/10 to-red-400/5 rounded-lg p-8 border border-red-400/30">
            <p class="text-yellow-300 font-semibold mb-2">⚠️ Late Payments</p>
            <p class="text-slate-300">Please ensure payments are received by the due date to avoid late fees. Contact the property manager with any questions.</p>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'mission') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Our Mission</h1>
          <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-8">
            <p class="text-lg text-slate-300 leading-relaxed mb-6">The Woodbridge Lakes HOA is dedicated to maintaining and enhancing our community for all residents.</p>
            <div class="space-y-6">
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Our Vision</h3>
                <p class="text-slate-300 leading-relaxed">To foster a vibrant, well-maintained community where residents can enjoy a high quality of life through excellent amenities, strong management, and active community engagement.</p>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Our Values</h3>
                <ul class="space-y-2 text-slate-300">
                  <li class="flex gap-3"><span class="text-blue-400">✓</span> Community Excellence</li>
                  <li class="flex gap-3"><span class="text-blue-400">✓</span> Transparency & Accountability</li>
                  <li class="flex gap-3"><span class="text-blue-400">✓</span> Fiscal Responsibility</li>
                  <li class="flex gap-3"><span class="text-blue-400">✓</span> Property Maintenance</li>
                  <li class="flex gap-3"><span class="text-blue-400">✓</span> Resident Satisfaction</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'clubhouse') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Community Clubhouse</h1>
          <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-8">
            <p class="text-slate-300 leading-relaxed mb-6">Our community clubhouse is the heart of Woodbridge Lakes, serving as a gathering place for residents and their guests.</p>
            <div class="space-y-6">
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Facilities</h3>
                <ul class="space-y-2 text-slate-300">
                  <li>• Large meeting hall for events and gatherings</li>
                  <li>• Kitchen facilities for catering and events</li>
                  <li>• Comfortable seating areas</li>
                  <li>• Adjacent swimming pool and BBQ area</li>
                </ul>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Reservations</h3>
                <p class="text-slate-300 mb-3">To reserve the clubhouse for your event, please contact the property manager. Rates and availability vary by season.</p>
                <p class="text-slate-400 text-sm">Residents receive discounted rates for private events</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'board') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Board of Directors</h1>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h3 class="text-xl font-bold text-blue-400 mb-4">President</h3>
              <p class="text-slate-300 mb-1">Board Leadership</p>
              <p class="text-slate-400 text-sm">Oversees all board activities and community matters</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h3 class="text-xl font-bold text-blue-400 mb-4">Vice President</h3>
              <p class="text-slate-300 mb-1">Board Leadership</p>
              <p class="text-slate-400 text-sm">Assists president and manages specific committees</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h3 class="text-xl font-bold text-blue-400 mb-4">Treasurer</h3>
              <p class="text-slate-300 mb-1">Financial Management</p>
              <p class="text-slate-400 text-sm">Manages HOA finances and budget</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h3 class="text-xl font-bold text-blue-400 mb-4">Secretary</h3>
              <p class="text-slate-300 mb-1">Record Keeping</p>
              <p class="text-slate-400 text-sm">Maintains meeting minutes and official records</p>
            </div>
          </div>
          <div class="mt-12 bg-blue-500/10 rounded-lg p-8 border border-blue-400/30">
            <p class="text-slate-300">For more information about the board or to request a meeting, please contact the property manager.</p>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'meetings') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Monthly Meeting Schedule</h1>
          <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-8">
            <p class="text-slate-300 leading-relaxed mb-6">Board meetings are held monthly to discuss community matters, review finances, and address resident concerns. Residents are welcome to attend.</p>
            <div class="bg-blue-500/10 rounded-lg p-6 border border-blue-400/30 mb-8">
              <h3 class="text-xl font-bold text-blue-400 mb-3">Regular Meeting Time</h3>
              <p class="text-slate-300 mb-2">First Thursday of each month at 7:00 PM</p>
              <p class="text-slate-400 text-sm">Location: Community Clubhouse</p>
            </div>
            <div>
              <h3 class="text-2xl font-bold text-blue-400 mb-4">Upcoming Meetings</h3>
              <p class="text-slate-300 mb-4">Check back regularly for specific dates and agendas</p>
              <p class="text-slate-400 text-sm">For details, contact the property manager or visit the office</p>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'insurance') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Insurance Information</h1>
          <div class="space-y-8">
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h2 class="text-2xl font-bold text-blue-400 mb-4">HOA Master Insurance</h2>
              <p class="text-slate-300 leading-relaxed mb-4">The HOA maintains master insurance coverage for all common areas, including the clubhouse, pool, and shared facilities. Details and coverage information are available from the property manager.</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h2 class="text-2xl font-bold text-blue-400 mb-4">Individual Unit Insurance</h2>
              <p class="text-slate-300 leading-relaxed mb-4">Individual homeowners are responsible for obtaining and maintaining insurance on their own units. This typically covers personal property and liability within your home.</p>
            </div>
            <div class="bg-gradient-to-br from-yellow-500/10 to-yellow-400/5 rounded-lg p-8 border border-yellow-400/30">
              <p class="text-yellow-300 font-semibold mb-2">Important</p>
              <p class="text-slate-300">For specific insurance requirements and recommendations, please consult with your insurance agent or contact the property manager.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'agent') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Agent Contact Information</h1>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h2 class="text-2xl font-bold text-blue-400 mb-6">Real Estate Agents</h2>
              <p class="text-slate-300 mb-6">If you're interested in buying or selling property in Woodbridge Lakes, local real estate agents can assist you.</p>
              <p class="text-slate-400 text-sm">Contact information for local agents available through the property manager</p>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
              <h2 class="text-2xl font-bold text-blue-400 mb-6">Insurance Agents</h2>
              <p class="text-slate-300 mb-6">Recommendations for insurance coverage specific to our community are available from the property manager.</p>
              <p class="text-slate-400 text-sm">Ask about HOA-specific insurance packages and discounts</p>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'property-manager') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Contact Property Manager</h1>
          <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-8">
            <div class="space-y-6">
              <div>
                <p class="text-slate-400 text-sm font-semibold">Phone</p>
                <p class="text-2xl font-bold text-blue-400 mb-4">Available for Community Inquiries</p>
              </div>
              <div>
                <p class="text-slate-400 text-sm font-semibold">Email</p>
                <p class="text-slate-300">manager@wblhoa.org</p>
              </div>
              <div>
                <p class="text-slate-400 text-sm font-semibold">Office Hours</p>
                <p class="text-slate-300">Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p class="text-slate-300">Saturday: 10:00 AM - 2:00 PM</p>
              </div>
              <div>
                <p class="text-slate-400 text-sm font-semibold">Office Location</p>
                <p class="text-slate-300">Woodbridge Lakes Community Clubhouse</p>
              </div>
            </div>
          </div>
          <div class="bg-blue-500/10 rounded-lg p-8 border border-blue-400/30">
            <h3 class="text-xl font-bold text-blue-400 mb-4">How We Can Help</h3>
            <ul class="space-y-2 text-slate-300">
              <li>• Maintenance requests and repairs</li>
              <li>• Payment inquiries and arrangements</li>
              <li>• Rule violations or concerns</li>
              <li>• Community event planning</li>
              <li>• General questions about the HOA</li>
            </ul>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'forms') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Community Forms</h1>
          <p class="text-slate-300 leading-relaxed mb-8">Access important forms and documents for the Woodbridge Lakes community below.</p>
          <div class="space-y-4">
            <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-400/50 transition-colors">
              <h3 class="text-lg font-bold text-blue-400 mb-2">Architectural Request Form</h3>
              <p class="text-slate-400 mb-4">Submit requests for external modifications to your property</p>
              <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">Download PDF</button>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-400/50 transition-colors">
              <h3 class="text-lg font-bold text-blue-400 mb-2">Maintenance Request Form</h3>
              <p class="text-slate-400 mb-4">Report maintenance issues in common areas</p>
              <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">Download PDF</button>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-400/50 transition-colors">
              <h3 class="text-lg font-bold text-blue-400 mb-2">Clubhouse Reservation Form</h3>
              <p class="text-slate-400 mb-4">Reserve the community clubhouse for events</p>
              <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">Download PDF</button>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-400/50 transition-colors">
              <h3 class="text-lg font-bold text-blue-400 mb-2">Violation Notice Response Form</h3>
              <p class="text-slate-400 mb-4">Submit responses to violation notices</p>
              <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">Download PDF</button>
            </div>
            <div class="bg-slate-800/50 rounded-lg p-6 border border-slate-700 hover:border-blue-400/50 transition-colors">
              <h3 class="text-lg font-bold text-blue-400 mb-2">Rental Notification Form</h3>
              <p class="text-slate-400 mb-4">Notify HOA of rental properties</p>
              <button class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors">Download PDF</button>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'pictures') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Community Pictures</h1>
          <p class="text-slate-300 leading-relaxed mb-8">Explore the beautiful Woodbridge Lakes community through our photo gallery.</p>
          <div class="grid md:grid-cols-2 gap-8">
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-8 border border-blue-400/30 aspect-video flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p class="text-slate-300">The Beautiful Lakes</p>
              </div>
            </div>
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-8 border border-blue-400/30 aspect-video flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p class="text-slate-300">Community Clubhouse</p>
              </div>
            </div>
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-8 border border-blue-400/30 aspect-video flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p class="text-slate-300">Swimming Pool</p>
              </div>
            </div>
            <div class="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg p-8 border border-blue-400/30 aspect-video flex items-center justify-center">
              <div class="text-center">
                <svg class="w-16 h-16 mx-auto mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                <p class="text-slate-300">Tennis Courts</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'covenants') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Covenants & Restrictions</h1>
          <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-8">
            <p class="text-slate-300 leading-relaxed mb-6">Covenants and restrictions help maintain the beauty, value, and character of our community. All residents are expected to comply with these guidelines.</p>
            <div class="space-y-6">
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Property Maintenance</h3>
                <p class="text-slate-300">Properties must be maintained in a clean and attractive condition. This includes lawn care, landscaping, and exterior maintenance.</p>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Architectural Guidelines</h3>
                <p class="text-slate-300">Any external modifications, additions, or alterations require prior approval from the HOA. Submit requests through the Architectural Review Committee.</p>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Parking & Vehicles</h3>
                <p class="text-slate-300">Parking is restricted to designated areas. Commercial vehicles and recreational vehicles are subject to additional restrictions.</p>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Pets</h3>
                <p class="text-slate-300">Pets are allowed but must be properly controlled and not create nuisance or disturbance to other residents.</p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-yellow-500/10 to-yellow-400/5 rounded-lg p-8 border border-yellow-400/30">
            <p class="text-slate-300">For complete details on covenants and restrictions, please contact the property manager or refer to the official HOA documents.</p>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'rules') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Rules & Regulations</h1>
          <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700 mb-8">
            <p class="text-slate-300 leading-relaxed mb-6">The following rules and regulations are established to promote the safety, comfort, and enjoyment of all residents.</p>
            <div class="space-y-6">
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Noise & Disturbances</h3>
                <p class="text-slate-300">Excessive noise is prohibited. Quiet hours are 10:00 PM - 8:00 AM. Music and activities must respect neighbors.</p>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Common Area Usage</h3>
                <p class="text-slate-300">All residents have equal access to common areas. Proper use and maintenance of clubhouse, pool, and facilities is required.</p>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Trash & Recycling</h3>
                <p class="text-slate-300">Trash must be properly contained and placed in designated areas. Recycling containers must be used when available.</p>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Guest Policies</h3>
                <p class="text-slate-300">Residents are responsible for their guests' conduct. Long-term guests require HOA notification.</p>
              </div>
              <div>
                <h3 class="text-2xl font-bold text-blue-400 mb-3">Rental Properties</h3>
                <p class="text-slate-300">Rental of units is permitted but requires notification to the HOA. Tenants must comply with all rules and regulations.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  } else if (page === 'privacy') {
    content = `
      <section class="py-20 px-4 sm:px-6">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-5xl font-bold mb-12">Privacy Policy</h1>
          <div class="bg-slate-800/50 rounded-lg p-8 border border-slate-700 space-y-6">
            <div>
              <h2 class="text-2xl font-bold text-blue-400 mb-3">Information We Collect</h2>
              <p class="text-slate-300">The Woodbridge Lakes HOA collects information necessary for community management, including resident names, contact information, unit numbers, and payment information.</p>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-blue-400 mb-3">How We Use Your Information</h2>
              <p class="text-slate-300 mb-3">We use collected information to:</p>
              <ul class="space-y-2 text-slate-300">
                <li>• Manage HOA operations and billing</li>
                <li>• Communicate important community information</li>
                <li>• Maintain community records</li>
                <li>• Enforce rules and regulations</li>
                <li>• Provide services to residents</li>
              </ul>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-blue-400 mb-3">Data Protection</h2>
              <p class="text-slate-300">The HOA takes reasonable measures to protect resident information from unauthorized access or misuse. Information is kept confidential and shared only as necessary for community management.</p>
            </div>
            <div>
              <h2 class="text-2xl font-bold text-blue-400 mb-3">Resident Rights</h2>
              <p class="text-slate-300">Residents have the right to access their own information and request corrections. Contact the property manager for privacy-related inquiries.</p>
            </div>
            <div class="bg-blue-500/10 rounded-lg p-6 border border-blue-400/30 mt-8">
              <p class="text-slate-300">For questions regarding this privacy policy, please contact the property manager.</p>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Woodbridge Lakes HOA</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif; }
    .nav-active { color: rgb(96, 165, 250); }
  </style>
</head>
<body class="bg-slate-900 text-white">
  <!-- Navigation -->
  <nav class="sticky top-0 z-50 bg-slate-900/95 backdrop-blur border-b border-slate-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center h-16">
        <div class="flex items-center gap-2">
          <svg class="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9m-9 11l4-4m0 0l4 4m-4-4v4"></path>
          </svg>
          <span class="text-xl font-bold">Woodbridge Lakes</span>
        </div>
        
        <button id="menuBtn" class="md:hidden">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <div id="desktopNav" class="hidden md:flex gap-3 pb-4 overflow-x-auto">
        ${navHTML}
      </div>

      <div id="mobileMenu" class="hidden md:hidden pb-4 border-t border-slate-700 max-h-96 overflow-y-auto">
        ${mobileNavHTML}
      </div>
    </div>
  </nav>

  <!-- Main Content -->
  <main>
    ${content}
  </main>

  <!-- Emergency Alert -->
  <section class="py-12 px-4 sm:px-6 bg-gradient-to-br from-red-500/10 to-red-400/5 border-t border-red-400/30">
    <div class="max-w-6xl mx-auto">
      <div class="flex gap-4">
        <svg class="w-6 h-6 text-red-400 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
        </svg>
        <div>
          <h3 class="text-lg font-bold text-red-300 mb-2">Car Towed?</h3>
          <p class="text-slate-300 mb-2">Contact <strong>Anytime Towing & Recovery</strong></p>
          <p class="text-slate-400 text-sm">6738 Wallis Rd #1667, West Palm Beach, FL 33413</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="bg-slate-950 border-t border-slate-700 py-8 px-4 sm:px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-3 gap-8 mb-8">
        <div>
          <h3 class="font-bold text-blue-400 mb-3">Quick Links</h3>
          <ul class="space-y-1 text-sm text-slate-400">
            <li><a href="/" class="hover:text-blue-400">Home</a></li>
            <li><a href="/hoa-contact-information.html" class="hover:text-blue-400">Contact</a></li>
            <li><a href="/payment-information.html" class="hover:text-blue-400">Payments</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-blue-400 mb-3">Community</h3>
          <ul class="space-y-1 text-sm text-slate-400">
            <li><a href="/board-of-directors.html" class="hover:text-blue-400">Board</a></li>
            <li><a href="/monthly-meeting-schedule.html" class="hover:text-blue-400">Meetings</a></li>
            <li><a href="/community-club-house.html" class="hover:text-blue-400">Clubhouse</a></li>
          </ul>
        </div>
        <div>
          <h3 class="font-bold text-blue-400 mb-3">Information</h3>
          <ul class="space-y-1 text-sm text-slate-400">
            <li><a href="/rules--regulations.html" class="hover:text-blue-400">Rules</a></li>
            <li><a href="/covenants--restrictions.html" class="hover:text-blue-400">Covenants</a></li>
            <li><a href="/privacy-policy.html" class="hover:text-blue-400">Privacy</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-slate-700 pt-8 text-center text-slate-400">
        <p>&copy; 2025 Woodbridge Lakes HOA. All rights reserved.</p>
        <p class="text-sm mt-2">A vibrant community in West Palm Beach, Florida</p>
      </div>
    </div>
  </footer>

  <script>
    const menuBtn = document.getElementById('menuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobileMenu a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  </script>
</body>
</html>`;
}
