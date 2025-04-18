import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/gedofeat.jpg";

export default function Features() {
  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,--theme(--color-slate-400/.25),transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-linear-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-linear-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-linear-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Quand votre santé se numerise! 
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,var(--color-gray-200),var(--color-indigo-200),var(--color-gray-50),var(--color-indigo-300),var(--color-gray-200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Vous avez tout le control! 
            </h2>
            <p className="text-lg text-indigo-200/65">
            Médecins, pharmaciens, laborantins et assureurs travaillant en harmonie sur un espace commun juste pour vous!
            </p>
          </div>
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Features"
            />
          </div>
          {/* Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">
            <article>
            <svg
  className="mb-3 fill-indigo-500"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M19 3h-4V2a1 1 0 0 0-2 0v1h-2V2a1 1 0 0 0-2 0v1H5a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Zm-7 13a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm5-7h-2V7a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2h2v2a1 1 0 0 0 2 0v-2h2a1 1 0 0 0 0-2Z" />
</svg>

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Pour les médecins
              </h3>
              <p className="text-indigo-200/65">
               Permettre aux médecins inscrits au tableau de l’ordre des médecins de s’enregistrer, de créer les dos
               siers médicaux des patients, de faire des consultations, de faire des prescriptions mé
               dicales, de prescrire les examens médicaux, de rechercher
               l’historique médical d’un patient précédemment Cree, de créer des RDV de toutes
               sortes(Vaccins, RDV, suivi,…).
              </p>
            </article>
            <article>
            <svg
  className="mb-3 fill-indigo-500"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M16 14h-1.26a6 6 0 0 0-5.48 0H8a6 6 0 0 0-6 6v2h20v-2a6 6 0 0 0-6-6ZM4 18a4 4 0 0 1 4-4h.75a4 4 0 0 1 6.5 0H16a4 4 0 0 1 4 4v1H4ZM12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"/>
</svg>

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Pour les patients
              </h3>
              <p className="text-indigo-200/65">
              permet à un patient ou un citoyen lambda de rechercher un spécialiste 
              dans sa zone de résidence et éventuellement de prendre RDV avec ce dernier, il 
              permet également de vérifier la qualité du médecin.
              </p>
            </article>
            <article>
            <svg
  className="mb-3 fill-indigo-500"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M12 2a1 1 0 0 0-1 1v3h-3a1 1 0 0 0-1 1v3H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h3a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-3V7a1 1 0 0 0-1-1h-3V3a1 1 0 0 0-1-1ZM5 13v-2h4v-4h2v4h4v2h-4v4h-2v-4Z"/>
</svg>

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Pour les pharmaciens
              </h3>
              <p className="text-indigo-200/65">
              permet aux pharmaciens inscrits de pouvoir récupérer les prescriptions 
              médicales des médecins en ligne et de servir le patient si celui-ci se présente à leur 
              niveau.
              </p>
            </article>
            <article>
            <svg
  className="mb-3 fill-indigo-500"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M17 2H7a1 1 0 0 0-1 1v8a5 5 0 0 0 2 4V20a3 3 0 0 0 6 0v-5a5 5 0 0 0 2-4V3a1 1 0 0 0-1-1Zm-5 18a1 1 0 0 1-2 0v-4h2Zm2-7H8V4h8Zm3 2h-2a3 3 0 0 0-6 0H5a1 1 0 0 0 0 2h2v2a5 5 0 0 0 10 0v-2h2a1 1 0 0 0 0-2Z"/>
</svg>


              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Pour les laboratoires
              </h3>
              <p className="text-indigo-200/65">
              permet également aux laboratoires d’analyses médicales de s’inscrire afin 
              de récupérer les demandes d’analyses prescrites par les médecins et de partager 
              également les résultats via le même canal.
              </p>
            </article>
            <article>
            <svg
  className="mb-3 fill-indigo-500"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M12 2 4 5v6c0 5 3.53 9.74 8 11 4.47-1.26 8-6 8-11V5Zm6 9c0 4.08-2.8 7.94-6 9-3.2-1.06-6-4.92-6-9V6.72l6-2.4 6 2.4Zm-8 2.59L8.41 12 7 13.41l3 3 6-6L14.59 9Z"/>
</svg>


              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Compagnies d'assurances.
              </h3>
              <p className="text-indigo-200/65">
              permet aux compagnies d’assurances de partager leur base de données 
de patients assures afin d’assurer la prise en charge automatique par l’émission d’un 
bon de prise en charge.
              </p>
            </article>
            <article>
            <svg
  className="mb-3 fill-indigo-500"
  xmlns="http://www.w3.org/2000/svg"
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="currentColor"
>
  <path d="M18 14V9A6 6 0 0 0 6 9v5L4 16v1h16v-1Zm-1 1H7v-5a4 4 0 0 1 8 0Zm-5 6a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2Z"/>
</svg>

              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Notifications Instantanées
              </h3>
              <p className="text-indigo-200/65">
              Cet écosystème fonctionnant de façon synchrone, les confirmations sont immédiates 
par des notifications sms, WhatsApp et même par mails assurant une optimisation de 
la gestion du dossier médical.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
