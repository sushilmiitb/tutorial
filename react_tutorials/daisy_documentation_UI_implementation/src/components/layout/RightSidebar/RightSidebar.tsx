/**
 * Right Sidebar component - For ads and additional content
 */

export function RightSidebar() {
  return (
    <aside className="hidden xl:block w-64 p-4 space-y-6">
      {/* Ad Space 1 */}
      <div className="card bg-base-200 shadow-sm">
        <div className="card-body p-4">
          <div className="aspect-video bg-base-300 rounded-lg mb-3 flex items-center justify-center">
            <span className="text-base-content/50 text-sm">Ad Space</span>
          </div>
          <h3 className="font-semibold text-sm mb-1">Sponsored Content</h3>
          <p className="text-xs text-base-content/70">
            Your advertisement could be here
          </p>
          <p className="text-xs text-base-content/50 mt-2">ads via Carbon</p>
        </div>
      </div>

      {/* Ad Space 2 */}
      <div className="card bg-base-200 shadow-sm">
        <div className="card-body p-4">
          <div className="aspect-square bg-base-300 rounded-lg mb-3 flex items-center justify-center">
            <span className="text-base-content/50 text-sm">Product</span>
          </div>
          <h3 className="font-semibold text-sm mb-1">daisyUI swag!</h3>
          <p className="text-xs text-base-content/70">Hats and more</p>
        </div>
      </div>

      {/* Quick Links */}
      <div>
        <h3 className="font-semibold text-sm mb-3 text-base-content/70">Quick Links</h3>
        <ul className="space-y-2 text-sm">
          <li>
            <a href="#" className="link link-hover text-base-content/70">
              GitHub
            </a>
          </li>
          <li>
            <a href="#" className="link link-hover text-base-content/70">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="link link-hover text-base-content/70">
              Discord
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}

