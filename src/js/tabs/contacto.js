export default function contacto() {
  const contactoPage = document.createElement('div');
  const item = document.createElement('div');
  const divform = document.createElement('div');
  const form = document.createElement('form');

  contactoPage.id = 'contacto';

  item.classList.add('item');
  divform.classList.add('mail-form');

  form.innerHTML = `<div class="frm-section">
                      <label for="name">nombre*</label>
                      <br/>
                      <input type="text" name="name" id="name" />
                    </div>
                    <div class="frm-section">
                      <label for="email">correo*</label>
                      <br/>
                      <input type="text" name="email" id="email" />
                    </div>
                    <div class="frm-section">
                      <label>mensaje*</label>
                      <br/>
                      <textarea name="comments" rows="5" cols="24" >Send your comments to us.</textarea>
                    </div>
                    <div class="">
                      <input class="contact-btn" type="submit" name="submit" value="enviar" />
                    </div>`;

  divform.appendChild(form);
  contactoPage.appendChild(item);
  contactoPage.appendChild(divform);

  return contactoPage;
}