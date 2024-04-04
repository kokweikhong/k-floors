export default function FailedToSubmitRequestEmail() {
  return (
    <section className="container mx-auto px-[15px] mt-[50px]">
      <div className="flex flex-col items-center justify-center text-[20px] h-screen font-medium">
        <p>Oh no, your request has not been submitted.</p>
        <p>Please check your connection or change browser.</p>
      </div>
    </section>
  );
}
