import jakarta.persistence.EntityManager;
import jakarta.persistence.EntityTransaction;
import jakarta.persistence.Persistence;
import model.Group;
import model.User;
import net.datafaker.Faker;

import java.util.HashSet;
import java.util.List;

public class Runner {
    public static void main(String[] args) {
        EntityManager em= Persistence.createEntityManagerFactory("mariadb-pu")
                        .createEntityManager();

        EntityTransaction tr= em.getTransaction();
        Faker faker=new Faker();
        for (int i = 0; i < 20; i++) {
            Group group=new Group();
            User user=new User();

            String gName=faker.company().name();
            String us=faker.internet().username();
            String pw=faker.internet().password();
            String email=faker.internet().emailAddress();

            group.setName(gName);
            user.setUsername(us);
            user.setPassword(pw);
            user.setEmail(email);
            user.setGroups(new HashSet<>(List.of(group)));
            tr.begin();
            em.persist(user);

            em.persist(group);
            tr.commit();
        }
    }
}
