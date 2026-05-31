export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">My First DaisyUI Card</h2>
          <p>Learning Next.js + Tailwind + DaisyUI</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </main>
  );
}
