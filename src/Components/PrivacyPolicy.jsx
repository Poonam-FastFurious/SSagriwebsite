import { useEffect, useState } from "react";

const PrivacyPolicy = () => {
  const [sections, setSections] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/privacy/privacy-policy")
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSections(data.data);
        } else {
          console.error("Error fetching privacy policy:", data.message);
        }
      })
      .catch((error) => console.error("Error fetching privacy policy:", error));
  }, []);

  return (
    <>
      <section
        className="about-area pt-175 pb-170 mb-50"
        style={{
          backgroundImage:
            "url(https://ingarden.com/cdn/shop/files/FAQ_2000x.jpg?v=1653472026)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tpabout__inner text-center">
                <h5 className="tpabout__inner-sub mb-15">
                  Privacy Policy SSAGRICULTURE
                </h5>
                <h3 className="tpabout__inner-title mb-35">Privacy</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="faq-area pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {sections.map((policy) => (
                <div key={policy._id} className="tpfaq__content mr-50">
                  <h4 className="tpfaq__title">{policy.title}</h4>
                  {policy.sections.map((section) => (
                    <div key={section._id}>
                      <h5>{section.title}</h5>
                      <div
                        dangerouslySetInnerHTML={{ __html: section.content }}
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
