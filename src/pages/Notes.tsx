import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItemSliding, IonItem, IonItemOptions, IonLabel, IonItemOption, IonItemDivider, IonTextarea, IonButton, IonIcon } from '@ionic/react';
import { add } from 'ionicons/icons';
import './Notes.css';

const Notes: React.FC = () => {

  const [notes, setNotes] = useState<String[]>([]);
  const [text, setText] = useState("");

  const addNote = (event: any) => {
    event.preventDefault();
    setNotes([...notes, text]);
    setText("");
  };

  const deleteNote = (noteText:String) => {
    setNotes(notes.filter(note => note !== noteText));
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Notes</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonList>
        <>
        {
          notes.length
          ?
          notes.map((note, index) => (
            <IonItemSliding>
              <IonItem>
                <IonLabel>{note}</IonLabel>
              </IonItem>
              <IonItemOptions side="end">
                <IonItemOption color="danger" onClick={() => deleteNote(note)}>Delete</IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))
          :
          <IonItem>
            <IonLabel>No notes added yet...</IonLabel>
          </IonItem>
        }
        </>
          <IonItemDivider />
          <IonItem>
            <IonLabel position="floating">Add Note</IonLabel>
            <IonTextarea rows={6} value={text} onIonChange={e => setText(e.detail.value!)}></IonTextarea>
            <IonButton size="small" disabled={text.length === 0} shape="round" onClick={addNote}>
              <IonIcon icon={add}></IonIcon>
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Notes;
